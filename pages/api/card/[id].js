import db from '../../../util/db';

export default (req, res) => {
    const {
        query: { id },
        method
    } = req
    console.log(`method: ${method}`)

    switch (method) {
        case 'GET':
            // Get data from database
            res.status(200).json(db.getCard(id));
            //console.log(`work get ${req.body.isFavourite}`);
            break
        case 'PUT':
            // Update or create data in database
            res.status(200).json(db.updateCard(id, req.body.isFavourite));
            console.log(`work put ${req.body.isFavourite}`);
            
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
