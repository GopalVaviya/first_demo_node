const models = require('../models')

const get_landing = (req, res) => {
    return res.render('landing', { title: 'Index page'})
}

const submit_lead = (req, res) => {
    console.log("lead email: working")
    return models.Lead.create({
		email: req.body.lead_email
	}).then(lead => {
		res.redirect('/leads');
	})
}

const show_leads = (req, res) => {
	return models.Lead.findAll().then(leads => {
		res.render('lead/leads', { title: 'Display Data', leads})
	})
}

const show_lead = (req, res) => {
	return models.Lead.findOne({ where: {
		id: req.params.lead_id
	}}).then(lead => {
		res.render('lead/lead', { title: 'single data', lead })
	})
}

const show_edit_lead = (req, res) => {
	return models.Lead.findOne({ where: {
		id: req.params.lead_id
	}}).then(lead => {
		res.render('lead/edit_lead', { lead })
	})
}

const edit_lead = function(req, res, next) {

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

const delete_lead = function(req, res, next) {
	return models.Lead.destroy({ 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/leads/');
	})
}

const delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({ 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.send({ msg: "success" });
	})
}

module.exports = {
	get_landing,
	submit_lead,
	show_leads,
	show_lead,
	show_edit_lead,
	edit_lead,
	delete_lead,
	delete_lead_json
}