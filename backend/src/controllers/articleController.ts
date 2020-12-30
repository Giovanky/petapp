import { Request, Response, NextFunction } from 'express'
import Articles, {IArticles} from '../models/Articles'

class ArticleController {
    public async listAll (req: Request, res: Response, next: NextFunction) {
        try{
            const data = await Articles.find()
                .populate('Categories')
            if(!data){
                res.status(500).json({
                    success: false,
                    message: 'Ha ocurrido un problema al listar los Articulos'
                })
            }
            res.json({
                success: true,
                data
            })
        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se han podido listar los Articulos',
                err
            })
            next()
        }
    }

    public async list (req: Request, res: Response, next: NextFunction) {
        try{
            const {id} = req.params
            const data = await Articles.findById(id)
                .populate('Categories')
            if(!data) {
                res.json({
                    success: true,
                    message: 'El Articulo no existe'
                })
            }
            res.json({
                success: true,
                data
            })
        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se ha podido listar el Articulo',
                err
            })
            next()
        }
    }

    public async add (req: Request, res: Response, next: NextFunction) { 
        try{
            const {category, name, description, salePrice, stock, state} = req.body
            const newArticle: IArticles = new Articles({
                category,
                name,
                description,
                salePrice,
                stock,
                state
            })
            const data = await newArticle.save()
            if(!data) {
                res.status(500).json({
                    success: false,
                    message: 'Ha ocurrido un problema al agregar el Articulo'
                })
            }
            res.json({
                success: true,
                data
            })

        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se ha podido agregar el Articulo',
                err
            })
            next()
        }
    }

    public async update (req: Request, res: Response, next: NextFunction) { 
        try{
            
        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se ha podido actualizar el Articulo',
                err
            })
            next()
        }
    }

    public async activate (req: Request, res: Response, next: NextFunction) { 
        try{
            
        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se ha podido activar el Articulo',
                err
            })
            next()
        }
    }

    public async deactivate (req: Request, res: Response, next: NextFunction) { 
        try{
            
        }catch(err) {
            res.status(500).json({
                success: false,
                message: 'No se ha podido anular el Articulo',
                err
            })
            next()
        }
    }

}

export const articleController = new ArticleController() 