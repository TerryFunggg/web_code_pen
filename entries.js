const entry_list = {
    home: 'home.js'
}

for( const entry in entry_list){
    entry_list[entry] = "./src/js/" + entry;
}

module.exports =  entry_list;