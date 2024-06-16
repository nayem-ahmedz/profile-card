const l = '<i class="fa-regular fa-heart"></i> ',
        c = '<i class="fa-regular fa-comments"></i> ',
         s = '<i class="fa-regular fa-share-from-square"></i> ';
let v = '10k';
let likes = document.getElementById('likes');
let comments = document.getElementById('comments');
let shares = document.getElementById('shares');
likes.innerHTML = l + v;
comments.innerHTML = c + v;
shares.innerHTML = s + v;