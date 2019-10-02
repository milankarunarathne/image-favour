import db from '../../util/db';

export default (req, res) => {
    // Get data from database
    res.status(200).json(db.getCards());
}
