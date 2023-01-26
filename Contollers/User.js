const User = require("../Model/User")


exports.AddUser = async (req, res) => { // fonction pour ajouter un nouveau user
    try {
        const found = await User.findOne({ email: req.body.Email })
        console.log(found)
        if (found) { //vérifier si l'email existe déja ou non
            return res.status(400).send('email already used please choose another!') // email déja ajouté
        }

        const newUser = new User(req.body) // nouveau user ajouter dans newUser
        await newUser.save() // attendre que le nouveau user soit enregistrer
        res.status(200).send({ Msg: 'succes', newUser }) // repense ajouté avec succès
    } catch (error) {
        res.status(500).send('could not add user') // erreur serveur
    }
}

exports.ListUsers = async (req, res) => {
    try {
        const listusr = await User.find()
        res.status(200).send({ Msg: 'List of Users:', listusr })
    } catch (error) {
        res.status(500).send('could not found Users')
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({ Msg: 'User deleted succefully' })
    } catch (error) {
        res.status(500).send('could not delete user!')
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndUpdate(id, { $set: req.body })
        res.status(200).send({ Msg: 'User updated succefully' })
    } catch (error) {
        res.status(500).send('Could not updtate user')
    }
}

exports.UserDet = async (req, res) => {
    try {
        const { id } = req.params
        const profile = await User.findById(id)
        res.status(200).send({ Msg: 'User profile:', profile })
    } catch (error) {
        res.status(500).send('Could not find user')
    }
}