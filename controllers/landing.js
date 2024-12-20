const models = require('../models')
exports.get_landing = (req, res) => {
    return res.render('landing', { title: 'Index page'})
}

exports.submit_lead = (req, res) => {
    console.log("lead email:", req.body.lead_email)
    return models.Lead.create({
		email: req.body.lead_email
	}).then(lead => {
		res.redirect('/leads');
	})
}

exports.show_leads = (req, res) => {
	return models.Lead.findAll().then(leads => {
		res.render('landing', { title: 'Display Data', leads})
	})
}

exports.show_lead = (req, res) => {
	return models.Lead.findOne({ where: {
		id: req.params.lead_id
	}}).then(lead => {
		res.render('lead', { title: 'single data', lead })
	})
}

exports.show_edit_lead = (req, res) => {
	return models.Lead.findOne({ where: {
		id: req.params.lead_id
	}}).then(lead => {
		res.render('lead/edit_lead', { lead })
	})
}

exports.edit_lead = function(req, res, next) {

	return models.Lead.update({
		email: req.body.lead_email
	}, { 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/lead/' + req.params.lead_id);
	})
}

exports.delete_lead = function(req, res, next) {
	return models.Lead.destroy({ 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/leads/');
	})
}

exports.delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({ 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.send({ msg: "success" });
	})
}