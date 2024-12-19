exports.get_landing = (req, res) => {
    return res.render('landing', { title: 'Index page'})
}