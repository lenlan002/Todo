/* @author LML*/

/*
 * Elemente über ID als Variable speichern
 * 
 */
var button = document.getElementById("add-task"); 
var field = document.getElementById("put-task");
var box = document.getElementById("list");

/* Aktuelles Datum ermitteln & setzen */
var datebox = document.getElementById("date");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy+'-'+mm+'-'+dd;
datebox.value = today;

/*
 * Event Listener Funktion für das hinzufügen eines Todo
 * @signature > exe()
 * @parameter > none
 * @return    > void
 */
function addTodo()
{
    /* Anzahl der Notizen */
    let amount = 0;
    let checked = 0;

    if(field.value != "")
    {
        /* Notizzettel o.a. Sticky Note */
        let note = document.createElement('div');
        note.style.cssText = "width: 20vw; height: 35vh; background-color: white; margin-left: 5vw;";

        /* Stichpunkt erzeugen */
        let paragraph = document.createElement('a');
        paragraph.addEventListener('click', function temp(){ 
            if(checked == 0)
            {
                paragraph.style.textDecoration = "line-through"; 
                checked = checked + 1;
            }else { paragraph.style.textDecoration = "none"; checked = checked - 1;}
        });
        paragraph.style.cssText = "font-family: arial; font-weight: bold; width: 100%; height: 10%; text-align: center; -ms-user-select: None; -moz-user-select: None; -webkit-user-select: None; user-select: None;";
        paragraph.innerText = field.value;
        field.value = "";
        note.appendChild(paragraph);

        /* To be removed */
        let spacer = document.createElement('hr');
        note.appendChild(spacer);

        /* Beschreibung */
        let description = document.createElement('textarea');
        description.style.cssText = "font-family: arial; width: 90%; height: 80%; display:block; border-color: transparent; resize: none; margin-bottom: 1em; clear: both;";
        note.appendChild(description);

        /* Den Zettel zum 'list' Element hinzuf. */
        box.appendChild(note);

        /* Anzahl der Notizen tracken */
        amount = amount + 1;

        /* Cursor in Eingabefeld setzen */
        field.focus();
    }
}

/* Event Listener dem 'Notiz erstellen' Knopf zuteilen */
button.addEventListener('click', addTodo);