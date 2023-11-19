import multer from "'multer"


const guardar = multer.diskStorage({
    destination: (req,res, cb) => {
        cb(null, "./uploads")
    },
    filname: (req, res, cb) => {
        if(file !== null){
            const ext = file.originalname.split(".").pop()
            cb(null, Date.now()+"."+ext)
        }
    }
})

/** FILTRO PARA VALIDAR QUE SEAN PJ O PNG LAS  IMAGENES **/
const filtro = (req, file , cb) => {
    if(file && (file.mimetype == 'image/jpg' || file.mimetype === 'image/png'))
    {
        cb(null, true)
    }
    else 
    {
        cb(null, false)
    }
}


export const  subirImagen = multer({ storage: guardar, fileFilter: filtro})