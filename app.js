var db              = new PouchDB('lotery');
var numbersTable    = document.getElementById('js-numbers-table');
var numberInput     = document.getElementById('number');
var whoInput        = document.getElementById('who');
var buttonStatus    = document.getElementById('button_status');
var timeout         = null;

const delay = ms => new Promise(res => setTimeout(res, ms));

buttonStatus.onclick = function() {
    checkAllNumbers();
    buttonStatus.remove();
};

function buttonAddNumber() {
    addNumber(numberInput.value, whoInput.value);
    numberInput.value = "";
    // whoInput.value = "";
}

function init()
{
    db = new PouchDB('lotery');
}

function deleteDatabase()
{
    db.destroy();
    init();
}

function buildTrForTable(number, who)
{
    var tr = document.createElement("tr");
    tr.id = 'number-' + number;

    var actionTd = document.createElement("td");
    var buttonDelete = document.createElement("button");
    buttonDelete.textContent = 'X';
    buttonDelete.classList.add('nes-btn', 'is-error');
    buttonDelete.onclick = function() { deleteNumber(number); return false; };

    actionTd.appendChild(buttonDelete);

    var numberTd = document.createElement("td");
    numberTd.textContent = number;

    var whoTd = document.createElement("td");
    whoTd.textContent = who;

    var result = document.createElement("td");

    tr.appendChild(actionTd);
    tr.appendChild(numberTd);
    tr.appendChild(whoTd);
    tr.appendChild(result);

    return tr;
}

function getAllNumbers()
{
    db.allDocs({
        include_docs: true,
        attachments: true
    }).then(function (result) {
        if (result.rows.length === 0) {
            return;
        }

        result.rows.forEach(function(element) {
            var tr = buildTrForTable(element.doc.number, element.doc.who);
            numbersTable.appendChild(tr);
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function findNumber(number) {
    db.get(number.toString()).then(function(doc) {
        return doc;
    }).then(function(response) {
        // handle response
    }).catch(function (err) {
        if (err.status === 404) {
            addNumber(number);
        }
        console.log(err);
    });
}

function deleteNumber(number)
{
    db.get(number.toString()).then(function(doc) {
        document.getElementById('number-' + number).remove();
        return db.remove(doc);
    }).then(function (result) {
        // handle result
    }).catch(function (err) {
        console.log(err);
    });
}

function addNumber(number, who = null) {
    var numberObject = {
        _id     : number.toString(),
        number  : number,
        who     : who
    };

    db.put(
        numberObject
    ).then(function (response) {
        console.log(response);
        var tr = buildTrForTable(numberObject.number, numberObject.who);
        numbersTable.appendChild(tr);
    }).catch(function (err) {

    });
}

const checkAllNumbers = async () => {
    await delay(1000);
    var count = 1;

    for (let row of numbersTable.rows) {
        count++;
        var number = row.cells.item(1).textContent;

        if (row.cells.item(3).textContent !== "") {
            continue;
        }

        checkNumber(number);
        await delay(2000);
    }

    timeout = setTimeout(function(){ checkAllNumbers(); }, 3000);
};

function checkNumber(number)
{
    var row = document.getElementById('number-' + number);
    row.classList.add("table-active");

    var config = {
        params: {
            number : number.toString()
        }
    };

    axios.get('test.php', config)
        .then(function (response) {
            // row.classList.contains()
            row.classList.remove("table-active");
            // handle success
            var data = eval(response.data);

            console.log(data);

            // (Math.floor(Math.random() * 2) === 0) ?
            //      data = {'numero':number,'premio':0,'timestamp':1545131466,'status':0,'error':0} :
            //      data = {'numero':number,'premio':'PREMIO_AL_DECIMO','timestamp':1545131466,'status':0,'error':0};

            if (data.error === 0 && data.premio !== 0) {
                row.classList.add("table-success");
                row.cells.item(row.cells.length - 1).textContent = data.premio;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            row.classList.remove("table-active");
        });
}


Object.filter = function( obj, predicate) {
    var result = {}, key;
    // ---------------^---- as noted by @CMS,
    //      always declare variables with the "var" keyword

    for (key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
};


function getResumen()
{
    var config = {
        params: {
            number : 'resumen'
        }
    };

    var premiosLocal = {
        'numero1' : 'gordo del sorteo',
        'numero2' : 'segundo premio',
        'numero3' : 'tercer premio',
        'numero4' : 'primer cuarto del sorteo',
        'numero5' : 'segundo cuarto del sorteo',
        'numero6' : 'primer quinto del sorteo',
        'numero7' : 'segundo quinto del sorteo',
        'numero8' : 'tercer quinto del sorteo',
        'numero9' : 'cuarto quinto del sorteo',
        'numero10' : 'quinto quinto del sorteo',
        'numero11' : 'sexto quinto del sorteo',
        'numero12' : 'septimo quinto del sorteo',
        'numero13' : 'octavo quinto del sorteo'
    };

    axios.get('test.php', config)
        .then(function (response) {
            // handle success
            var data = eval(response.data);

            // console.log(data);

            Object.keys(data).map(function(objectKey, index) {
                var value = data[objectKey];
                var nombrePremio = premiosLocal[objectKey];

                if (value.toString().length == 5) {
                    var row = document.getElementById('number-' + value.toString());

                    if (row != null) {
                        row.cells.item(row.cells.length - 1).textContent += ' ,' + nombrePremio;
                    }
                }
            });
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });


    return {
        "timestamp": 1545462518,
        "status": 0,
        "numero1": 37668,
        "numero2": -1,
        "numero3": -1,
        "numero4": -1,
        "numero5": -1,
        "numero6": -1,
        "numero7": -1,
        "numero8": -1,
        "numero9": -1,
        "numero10": -1,
        "numero11": -1,
        "numero12": -1,
        "numero13": -1,
        "fraseSorteoPDF": "El sorteo aún no ha comenzado",
        "fraseListaPDF": "El sorteo aún no ha comenzado",
        "listaPDF": "",
        "urlAudio": "",
        "error": 0
    };

}