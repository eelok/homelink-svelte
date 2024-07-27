<div class="container">
    <h1>Departure Checklist</h1>    
    <p>Thank you for choosing our apartment for your stay! We hope you've had a wonderful time. To help make your departure smooth, we've prepared this handy checklist. We'd be very grateful if you could take a moment to go through these items:</p>
    <form>
        <div class="checkbox-container">
            <input type="checkbox" id="task-1">
            <label for="task-1">Turn off all heaters.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-2">
            <label for="task-2">Close all windows.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-3">
            <label for="task-3">Remove the bed linen from the mattresses and leave it on top of each bed. You do not need to wash them.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-4">
            <label for="task-4">If you used the coffee machine, make sure you clean it (surface, brew group, milk frother, and milk container).</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-5">
            <label for="task-5">Load the dishwasher with any used dishes. Start the dishwasher before leaving.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-6">
            <label for="task-6">Clean all surfaces in the kitchen and the bathroom. For example, the door of the dishwasher could become greasy when you use it during cooking.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-7">
            <label for="task-7">Return all items to their original places.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-8">
            <label for="task-8">Report any accidental damage that may have occurred during your stay.</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="task-9">
            <label for="task-9">Return the keys to the key safe using the same code you used to retrieve them.</label>
        </div>
    </form>
    <p>Please leave the apartment in the same condition you found it upon arrival. This helps us maintain the apartment and ensures a pleasant experience for all guests.</p>
    <p>We hope you had a wonderful stay. Safe travels home!</p>
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