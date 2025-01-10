function dateTime () {
  const date = new Date()
  let today = date.toDateString()
  let time = date.toLocaleTimeString()
  document.getElementsByName('q')[0].placeholder = today + ' ' + time
  setTimeout(dateTime, 1000)
}

var konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]
var currentKey = 0
var keyHandler = function (event) {
  // If the key isn't in the pattern, or isn't the current key in the pattern, reset
  if (
    konamiCode.indexOf(event.key) < 0 ||
    event.key !== konamiCode[currentKey]
  ) {
    currentKey = 0
    return
  }

  // Update how much of the pattern is complete
  currentKey++

  // If complete, add animation class and reset
  if (konamiCode.length === currentKey) {
    currentKey = 0
    document.getElementById('traichu-running').classList.add('slide')
    setTimeout(function () {
      document.getElementById('traichu-running').classList.remove('slide')
    }, 4250)
  }
}

// Link jumping functionality
document.addEventListener('keydown', function (event) {
      if (event.ctrlKey) { // You can replace `altKey` with `ctrlKey` or `shiftKey` if needed
    switch (event.key) {
      case '1':
        document.getElementById('link1')?.click();
        break;
      case '2':
        document.getElementById('link2')?.click();
        break;
      case '3':
        document.getElementById('link3')?.click();
        break;
      case '4':
        document.getElementById('link4')?.click();
        break;
      case '5':
        document.getElementById('link5')?.click();
        break;
      case '6':
        document.getElementById('link6')?.click();
        break;
      case '7':
        document.getElementById('link7')?.click();
        break;
      case '8':
        document.getElementById('link8')?.click();
        break;
      case '9':
        document.getElementById('link9')?.click();
        break;
      case 'q':
        document.getElementById('linkq')?.click();
        break;
      case 'w':
        document.getElementById('linkw')?.click();
        break;
      case 'e':
        document.getElementById('linke')?.click();
        break;
      default:
        console.log('No link mapped for this key with Alt.');
    }
  }
});

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false)
