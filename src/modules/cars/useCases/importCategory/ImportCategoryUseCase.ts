import fs from "fs"
import { parse } from 'csv-parse';

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            //stream permite a leitura assíncrona dos dados do arquivo, em vez de carregar todo o conteúdo do arquivo na memória de uma só vez
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []

            //converte os dados CSV em uma estrutura de dados mais manipulável
            const parseFile = parse()

            //direciona os dados lidos de um fluxo para outro fluxo
            //saída do fluxo de leitura stream para a entrada do parseFile, possibilitando que os dados lidos do arquivo sejam processados e analisados pelo parseFile
            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [ name, description ] = line
                categories.push({
                    name,
                    description,
                })
            })
            .on("end", () => {
                resolve(categories)
            })
            .on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        
        categories.map(async category => {
            const { name, description } = category

            const existCategory = this.categoriesRepository.findByName(name)

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                })
            }
        })
    }
}

export { ImportCategoryUseCase }