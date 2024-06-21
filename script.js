var users = [
  {
    profilePic:
      "https://static-images.vnncdn.net/files/publish/2022/7/30/295928990-425047616353470-2450826629510001633-n-398.jpg",
    displayPic:
      "https://static-images.vnncdn.net/files/publish/2022/7/30/295928990-425047616353470-2450826629510001633-n-398.jpg",
    pendingMessage: 67,
    location: "Quận 1, TP.HCM",
    name: "Lan",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"><i/>`,
        interest: "music",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis animi doloremque tenetur, velit quis! Natus laudantium cum dolorem quaerat ipsa. Sit consectetur obcaecati beatae ratione quis neque a rem?",
    isFriends: null,
  },
  {
    profilePic:
      "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    displayPic:
      "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    pendingMessage: 12,
    location: "Quận 2, TP.HCM",
    name: "Mai",
    age: 21,

    interests: [
      {
        icon: `<i class="ri-music-2-fill"><i/>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"><i/>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nostrum.",
    isFriends: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 34,
    location: "Quận 3, TP.HCM",
    name: "Hà",
    age: 30,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"><i/>`,
        interest: "music",
      },

      {
        icon: `<i class="ri-quill-pen-fill"><i/>`,
        interest: "writing",
      },
    ],
    bio: "rem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis sequi totam nesciunt neque quis cupiditate illum aut perferendis autem?",

    isFriends: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 90,
    location: "Quận 4, TP.HCM",
    name: "Như",
    age: 29,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"><i/>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"><i/>`,
        interest: "writing",
      },
      {
        icon: `<i class="ri-quill-pen-fill"><i/>`,
        interest: "writing",
      },
    ],
    bio: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam voluptates ratione quasi quae facilis ipsum, obcaecati, deserunt tenetur quas maxime natus voluptatum.",

    isFriends: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

function setData(index) {
  select(".prflimg img").setAttribute("src", users[index].profilePic);
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  // Clear previous content of .tags
  select(".tags").innerHTML = "";

  // Iterate through interests and insert HTML for each interest
  users[index].interests.forEach(function (interest) {
    var tag = document.createElement("div");
    tag.classList.add(
      "tag",
      "flex",
      "rounded-full",
      "items-center",
      "bg-white/30",
      "sm:px-1",
      "lg:px-3",
      "md:px-3",
      "py-1",
      "gap-1"
    );

    var icon = document.createElement("i");
    icon.classList.add("text-sm");
    icon.innerHTML = interest.icon;

    var text = document.createElement("h3");
    text.classList.add("text-sm", "tracking-tighter");
    text.textContent = interest.interest;

    tag.appendChild(icon);
    tag.appendChild(text);

    select(".tags").appendChild(tag);
  });
  select(".bio p").textContent = users[index].bio;
}

var curr = 0;
let isAnimated = false;

(function setInitial() {
  select(".maincard img").setAttribute("src", users[curr].displayPic);
  select(".incomingcard img").setAttribute("src", users[curr + 1].displayPic);

  setData(curr);
  curr = 2;
})();

const deny = select(".deny");
const accept = select(".accept");

function imageChange() {
  if (!isAnimated) {
    isAnimated = true;
    var tl = gsap.timeline({
      onComplete: function () {
        isAnimated = false;
        const main = select(".maincard");
        const incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    );
    tl.from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}
deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    const div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
