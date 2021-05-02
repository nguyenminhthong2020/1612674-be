var middleware = {
  parseUser:(req, res, next) =>{
    if(req.cookies && req.cookies.userInfo){
      req.user =req.cookies.userInfo;
      return next();
    }
    req.user=undefined;
    next();
  },

  isLogged : (req, res, next)=>{
    if (req.user){
      next();
    }
    else{
      res.redirect('/login');
    }
  },
}

module.exports = middleware;
