document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change background color
    document.body.style.backgroundColor = randomColor;
    
    // Update message
    document.getElementById('message').textContent = 
        `Background color changed to: ${randomColor}`;
});
