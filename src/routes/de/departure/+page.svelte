<div class="container">
    <h1>Abreise-Checkliste</h1>    
    <p>Vielen Dank, dass ihr euch für unser Apartment entschieden habt! Wir hoffen, ihr hattet eine wunderbare Zeit. Um eure Abreise reibungslos zu gestalten, haben wir diese praktische Checkliste vorbereitet. Wir wären euch sehr dankbar, wenn ihr euch einen Moment Zeit nehmen könntet, um diese Punkte durchzugehen:</p>
    <form>
        <div class="checkbox-container">
            <input type="checkbox" id="task-1">
            <label for="task-1">Alle Heizungen ausschalten.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-2">
            <label for="task-2">Alle Fenster schließen.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-3">
            <label for="task-3">Die Bettwäsche von den Matratzen entfernen und auf jedem Bett liegen lassen. Ihr müsst sie nicht waschen.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-4">
            <label for="task-4">Wenn ihr die Kaffeemaschine benutzt habt, stellt bitte sicher, dass ihr sie reinigt (Oberfläche, Brühgruppe, Milchaufschäumer und Milchbehälter).</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-5">
            <label for="task-5">Den Geschirrspüler mit benutztem Geschirr beladen. Startet den Geschirrspüler, bevor ihr geht.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-6">
            <label for="task-6">Alle Oberflächen in der Küche und im Badezimmer reinigen. Zum Beispiel kann die Tür des Geschirrspülers fettig werden, wenn ihr ihn während des Kochens benutzt.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-7">
            <label for="task-7">Alle Gegenstände an ihren ursprünglichen Platz zurückstellen.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-8">
            <label for="task-8">Jegliche versehentliche Schäden melden, die während eures Aufenthalts entstanden sind.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-9">
            <label for="task-9">Die Schlüssel mit dem gleichen Code, den ihr zum Abholen benutzt habt, in den Schlüsselsafe zurücklegen.</label>
        </div>
    </form>
    <p>Bitte hinterlasst das Apartment in dem Zustand, in dem ihr es bei eurer Ankunft vorgefunden habt. Dies hilft uns, das Apartment zu pflegen und sorgt für ein angenehmes Erlebnis für alle Gäste.</p>
    <p>Wir hoffen, ihr hattet einen wunderbaren Aufenthalt. Gute Heimreise!</p>
</div>

<style>
    .departure-checklist {
        max-width: 600px;
        margin: 0 auto;
    }
    .checkbox-container {
        margin-bottom: 15px;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
    }
    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkbox-container label {
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        line-height: 25px;
    }
    .checkbox-container label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        border: 2px solid #333;
        background-color: #fff;
        border-radius: 4px;
    }
    .checkbox-container input:checked + label:before {
        background-color: #2196F3;
        border-color: #2196F3;
    }
    .checkbox-container label:after {
        content: '';
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 7px;
        height: 13px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    .checkbox-container input:checked + label:after {
        display: block;
    }
</style>