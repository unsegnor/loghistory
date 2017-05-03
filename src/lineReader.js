function createInstance(){
  return Object.freeze({
    read
  });

  function read(line){
    return {};
  }
}

module.exports = {
  createInstance
}
