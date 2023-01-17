

interface IcreateCallbackData{
    name: string,
    phone: number,
    email: string,
}

const SERVER_URL = 'http://localhost:3004'

export class HTTP{

    static async createCallback(data: IcreateCallbackData, url: string){
        return await fetch(SERVER_URL + `${url}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },
        }).then(()=>{
            return true
        }).catch((r)=>{
            return false
        })
    }
}