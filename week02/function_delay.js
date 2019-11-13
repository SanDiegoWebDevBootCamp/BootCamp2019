function doHomework(subject, callback) {
    setTimeout(() => {
        console.log('Getting my data from Instagram account, which can take a while');
        callback();
    }, 5000)
}

function alertFinished(){
  console.log('Ready to render my posts');
}

doHomework('math', alertFinished);