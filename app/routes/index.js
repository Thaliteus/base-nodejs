module.exports=(app)=>{
    app.get(`/`,(req,res)=>{
        res.render(`index`);
        return 0;
    })
}
