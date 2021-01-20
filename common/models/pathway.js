module.exports=function(Pathway){


Pathway.remoteMethod(
   'milestones',{
    accepts: {arg: 'id', type: 'number', required: true},
      http:{
          path:'/:id/milestones',
          verb:'get'
      } ,
      returns:{
          arg:'pathway',
          type:'objects'
    }
   }
);
Pathway.afterRemote('milestones', function(ctx, instance, next){
    ctx.res.setHeader('Content-Type','application/json');
    context.res.end(context.result);
});
};