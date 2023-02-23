const handlers = ({ axios }) => ({
    get: async (req, res)  =>  {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users') 
        res.status(200).json(data.data)
    },
    post:() => {

    },
    put:() => {

    },
    delete:() => {

    }, 
})

module.exports = handlers;