// Get the code editor textarea and buttons
const codeEditorTextarea = document.querySelector('#code');
const copyButton = document.querySelector('#copy-button');
const saveButton = document.querySelector('#save-button');
const lockButton = document.querySelector('#lock-button');

// Add event listeners to the buttons
copyButton.addEventListener('click', () => {
  // Copy the code to the clipboard
  codeEditorTextarea.select();
  document.execCommand('copy');
});

saveButton.addEventListener('click', () => {
  // Save the code to a file
  const code = codeEditorTextarea.value;
  const fileName = 'code.txt';

  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(url);
});

lockButton.addEventListener('click', () => {
  // Lock or unlock the code editor
  if (codeEditorTextarea.readOnly) {
    codeEditorTextarea.readOnly = false;
    lockButton.classList.remove('active');
  } else {
    codeEditorTextarea.readOnly = true;
    lockButton.classList.add('active');
  }
});

