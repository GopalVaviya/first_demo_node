const models = require('../models')
exports.get_landing = (req, res) => {
    return res.render('landing', { title: 'Index page'})
}

exports.submit_lead = (req, res) => {
    console.log("lead email:", req.body.lead_email)
    return models.Lead.create({
		email: req.body.lead_email
	}).then(lead => {
		res.redirect('/');
	})
}