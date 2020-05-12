

export  function Contact(req, res){
    res.render('Contact');
}

export function Submit(req,res){
    console.log(req.body);
    res.render('Submit', req.body);
}