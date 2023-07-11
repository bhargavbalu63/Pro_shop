const asyncHandler= fn=>(req,res,next)=>   // use promises to avoid using try...catch block 
{
    Promise.resolve(fn(req,res,next)).catch(next)  // In this code, the asyncHandler function takes fn as a parameter and returns an arrow function (req, res, next) => { /* function body */ }. The fn(req, res, next) call is placed inside the function body, allowing it to be executed when the returned function is invoked.
}
export default asyncHandler