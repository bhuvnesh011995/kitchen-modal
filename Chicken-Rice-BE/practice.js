const multer = require('multer')
const upload = multer().single('avatar')

app.post('/profile', function (req, res,next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    // Everything went fine.
    next()
  })
})


function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    cb(null, false)
  
    // To accept the file pass `true`, like so:
    cb(null, true)
  
    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
  }

  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  
  