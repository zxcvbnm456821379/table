let data = [
    {
        name: '张三',
        subject: 'JavaScript',
        ach: '100',
        id: 0
    },
    {
        name: '李四',
        subject: 'JavaScript',
        ach: '90',
        id: 1
    },
    {
        name: '刘五',
        subject: 'JavaScript',
        ach: '90',
        id: 2
    }
]

function _data() {
    let html = ``;
    for (j in data) {
        html += `
    <tr>
        <td>${data[j].name}</td>
        <td>${data[j].subject}</td>
        <td>${data[j].ach}</td>
        <td>删除</td>
    </tr>
    `;
    }
    document.querySelector('.container').innerHTML += html
}
_data()

function over() {
    let trs = document.querySelectorAll('td');
    for (let i = 4; i < trs.length; i++) {
        //console.log(trs[i += 3]);
        let removeBtn = trs[i += 3];
        //console.log(removeBtn.length)
        removeBtn.onclick = function () {
            tips(this);
            data.splice(0, i);
            console.log(data)
            // this.parentNode.style.display = 'none';
        }
    }
};
over();
function tips(e) {
    let model = document.querySelector('#model');
    model.style.display = 'block';
    document.querySelector('.close').onclick = function () {
        model.style.display = 'none';
    }
    document.querySelector('#model button').onclick = function () {
        e.parentNode.style.display = 'none';
        model.style.display = 'none';
    }
}


document.querySelector('#add-Stu').onclick = function () {
    document.querySelector('.input-Control').style.display = 'block';
    addStu();
}

//添加学生
function addStu() {
    document.querySelector('.add-ach').onclick = function () {
        let name = document.querySelector('#name').value;
        let subject = document.querySelector('#subject').value;
        let ach = document.querySelector('#ach').value;
        //console.log(_ach,_name,_subject)

        data.unshift({
            name,
            subject,
            ach,
            id: data.length + 1
        });
        if (data.length === 0) {
            return true;
        } else {
            document.querySelector('.container').innerHTML = '';
        }
        _data();
        over();
    }
    document.querySelector('.close-input').onclick = function () {
        document.querySelector('.input-Control').style.display = 'none';
    }
}



//返回顶部
window.addEventListener('scroll', () => {
    let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(_scrollTop)
    document.querySelector('.top').onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
})