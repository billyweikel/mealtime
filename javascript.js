document.getElementById('mealTimeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mealCount = parseInt(document.getElementById('mealCount').value);
    const wakeTime = new Date('1970-01-01T' + document.getElementById('wakeTime').value);
    const bedTime = new Date('1970-01-01T' + document.getElementById('bedTime').value);

    const timeDifference = (bedTime - wakeTime) / (mealCount + 1);
    
    let schedule = "";
    for (let i = 1; i <= mealCount; i++) {
        let mealTime = new Date(wakeTime.getTime() + timeDifference * i);
        schedule += `<p>Meal ${i}: ${mealTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>`;
    }

    document.getElementById('mealSchedule').innerHTML = schedule;
});
