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
            break
        case 'PUT':
            // Update or create data in database
            res.status(200).json(db.updateCard(id, req.body.isFavorite));
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
