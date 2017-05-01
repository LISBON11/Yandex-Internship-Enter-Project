function $(param) {
    var obj = document.querySelector(param);

    // получить список классов
    obj.getClasses = function() {
        return obj.classList;
    }

    //добавить класс/несколько классов
     obj.addClass = function(className) {
        [].slice.call(arguments).forEach((_className)=>{
            obj.classList.add(_className);
        })
    }

    //удалить класс/несколько классов
    obj.removeClass = function(className) {
        [].slice.call(arguments).forEach((_className)=>{
            obj.classList.remove(_className);
        })
    }

    //переключить класс/несколько классов
    obj.toggleClass = function(className) {
        [].slice.call(arguments).forEach((_className)=>{
            obj.classList.toggle(_className);
        })
    }

    //очистить все классы
    obj.clear = function() {
        obj.className = '';
    }

    //проверить наличие всех переданых классов, true - если все присутствуют
    obj.hasClasses = function(className) {
        let res = true;

        [].slice.call(arguments).forEach((_className)=>{
            if (!obj.classList.contains(_className)) 
                res = false;
        })

        return res;
    }

    //заменить класс
    obj.replaceClass = function(classFrom, classTo) {
        obj.removeClass(classFrom);
        obj.addClass(classTo);
    }

    //добавить префикc/постфикс
    // Последний аргумент 1 - добавляем префик,  -1 - добавляем постфикс
    //Второй агрумент с конца  - строка,  префикс/постфикс
    //Если передавать 2 аргумента,  то префик/постфикс добавится ко всем классам,
    // если указывать  больше двух  аргументов, то первыми будут идти классы,  к которым неоьходимо добавить префикс/постфикс
    obj.addPrefix = function() {
        let args = [].slice.call(arguments, 0);
        let position = args.splice(args.length-1, 1)[0];
        let prefix = args.splice(args.length-1, 1)[0];
        let classes = args;
        
        if (classes.length) {
            prefixToggle();
        } else {
            classes = obj.getClasses();
            prefixToggle();
        }

        function prefixToggle() {
            let classArr = [];
            let newClass;

            classes.forEach((_class)=>{
                classArr.push(_class);
            })

            classes.forEach((className)=>{
                if(position == 1) 
                    newClass = prefix + '-' + className;

                if(position == -1) 
                    newClass = className + '-' + prefix;

                obj.addClass(className, newClass);
            });

            classArr.forEach((_class)=>{
                obj.removeClass(_class);
            })
        }
    }

    return obj;
}

