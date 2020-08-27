let courses = [
    {
        title: "The Web Developer Bootcamp",
        description: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
        img: "https://lh3.googleusercontent.com/yYmEQU8pkbpODHoELyJ8YGTyJ5xhrOXsmkvH1Efc5iuFr-fh8JGOkqFht6iYcsXzA5jKSk6rueKBu9fjQ-Y47DV2JDdFn1XaII2_Vu3Cf3Iwez1PhrkWiW-6Jy9NjmnW0Zo-cq_7mg=w2400",
        price: 140,
        author: "Colt Steele"
    },
    {
        title: "Angular - The Complete Guide (2020 Edition)",
        description: "Master Angular 10 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
        img: "https://lh3.googleusercontent.com/2kaLU90LGlbEVSXprULsG6nRm6EJDnQXH4oTu97n3c9IiWuVUuyyj1cz8sESN01v2yERIQMxrk5RdNx6KZVMxTWZIWd5NVj_g2CSXZCU2jFJBPKTUeYeO_qz7lnH__kVLCKxHuZNfw=w2400",
        price: 135,
        author: "Maximillian Schwarzmuller"
    },
    {
        title: "The Complete JavaScript Course 2020: Build Real Projects!",
        description: "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
        img: "https://lh3.googleusercontent.com/e2xxFXzrNR4U2JpTICO00vPRoDl5UaVa9w7L9mPfRu77sevy51t5_HFyxJlbo2utc_v8S0Zo0CAa0OjQ-KZ_-S94Vza0r_91R0vG4VAr5ui2ucyajbXdPIh3TEoFyNEhG7h2q7P7ig=w2400",
        price: 135,
        author: "Jonas Schmedtmann"
    },
    {
        title: "The Complete 2020 Web Development Bootcamp",
        description: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
        img: "https://lh3.googleusercontent.com/7nbQM0YoMqXTJcJmORv0wec97DE5CVHIuYWUwKTTaxHEgvGHnJNLeV0VbH8dcPH37zG7Alidi1x6ag_Xa4lIxUP-_900HWiFrYHrV_DjR0Xwxq0ZPVwO76khj9g7-LBIGurZmbTQdQ=w2400",
        price: 135,
        author: "Dr. Angela Yu"
    },
    {
        title: "Modern React with Redux [2020 Update]",
        description: "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
        img: "https://lh3.googleusercontent.com/DSpL2K6XiX0LxBQm_hkfl2nsuKD0dNRXI1-Hq7yo7c6MAAqwCa0U_EUxCd-djQiLOmfK6oknVdg0wW1paovwcnpu7HaCpNZfJkTWOAPf5BbblG8PkWGI3B1Kf8XELm_fqFjo_tqhYw=w2400",
        price: 140,
        author: "Stephen Grider"
    },
    {
        title: "Build Responsive Real World Websites with HTML5 and CSS3",
        description: "The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.",
        img: "https://lh3.googleusercontent.com/QNQBt1UPKM2V2alh6LwCWU2xw9XJ-yaeD0bbkya0DNnYlEASAxXk_3Akadvo6UahnGk97wpbb_zYRCVYo1DPqWAXKr3AFlTHKp8VLGGnndI1nt8s2GLAuLh1wsTkpXXZ0dK7Hr58bQ=w2400",
        price: 185,
        author: "Jonas Schmedtmann"
    },
    {
        title: "Vue JS - The Complete Guide (incl. Vue Router & Vuex)",
        description: "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
        img: "https://lh3.googleusercontent.com/PwFjZyN6120hxjLZKl0rQaGCttAthD-nwLsL-Bjvb_DW1e0Syf_uKFJCRayheU8KqgnzpWhM3t8S-y4CRHmD2CF-dqO1gYt6BrvVIvIZNyG80DDXlGa_atkP96xdue9o89CrhIb0mg=w2400",
        price: 135,
        author: "Maximillian Schwarzmuller"
    },
    {
        title: "Python and Django Full Stack Web Developer Bootcamp",
        description: "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django!",
        img: "https://lh3.googleusercontent.com/1cqk1UBdcYcVaAx7naIrw8eH3mLrWzSXzTn0TK3m247Z9_ZeAB0Ib3b80Lo1FhrIY4A5AJEWrMH-SliwYWaO8PbRfXxLAWnJCKKmc0mivg_lBtF8H3DMtiYIJT_uPMxKdIxdp4ZIGw=w2400",
        price: 135,
        author: "Jose Portilla"
    },
    {
        title: "The Complete ASP.NET MVC 5 Course",
        description: "Learn to build fast and secure web applications with ASP.NET MVC 5 - The most popular course with 40,000+ students!",
        img: "https://lh3.googleusercontent.com/4XeZQNBNOzdFlDbETKs1s8FauCbEwzaLQzt7jaqp8o3mbiRv8irbTlEEEpncBnGWmXnIMqwYvVrJRepVBkrbmLoFYoojRWkhxzgDM91lirYY42idYYq35zPbA5h_Am3TYjC2zhf--Q=w2400",
        price: 135,
        author: "Mosh Hamedani"
    },
    {
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        description: "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
        img: "https://lh3.googleusercontent.com/NUUF86sP_AbcGPlp_wOTsmNeMxTLDgFiSE_J4XnuAsOS2xbQIc5mMoCQK1if4vbs7dxGLIOcflU9zgExE1rMb9IrAA6u7bLG7Q4q3_xX8gbc4tHDDKsB8XlunfF97pS2s2ZPC7d83g=w2400",
        price: 135,
        author: "Jonas Schmedtmann"
    },
    {
        title: "Master Microservices with Spring Boot and Spring Cloud",
        description: "An awesome journey from Restful Web Services ( REST API ) to Microservices with Java, Spring Boot and Spring Cloud",
        img: "https://lh3.googleusercontent.com/H98veEbDHIKbPaqrSQuPr7uZPPfhm2SxIgcAFhmg2XdOjLubpDdNTSp90aBXpr01Vgc7crX2Ljb1TVFkIBMPGgE5zoJPKu_bOrf6gbFwYNmwhcp-eS5HOLomW2LJ5KVxblNZOyIumQ=w2400",
        price: 200,
        author: "In28minutes Official"
    },
    {
        title: "The Complete 'No Code' Developer Course: Build Real Projects",
        description: "Learn The Software Development Superpower In This Course! Learn How To Build A Range Of Products Without Writing Code.",
        img: "https://lh3.googleusercontent.com/Yi2xFue8kA9wXNPwdk2dn9dN8mBhr-zoibL-e5Xx52VXH82Ge6qfGRBOyan1iaNnyCyVQ4iSa6w8X8-DhJ2WXR_zK79cQe-gVmGvRnL9QG0kWZYQIrUyErazfO5t_F1mWP-dhZyesw=w2400",
        price: 135,
        author: "Rob Percival, Ravindar Deol"
    },
    {
        title: "PHP for Beginners - Become a PHP Master - CMS Project",
        description: "PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects",
        img: "https://lh3.googleusercontent.com/tfu9054wxdKtstXVaZ5fAKbyFAN2WPpO7qZtFYpq-1-kCoecoNFFeWsAeHBSdq5FH-ldJCxztTQovxw3fXiLGswtWuKzjOLU0gyiaSeMCLvi1ICMby4onzlVl9gU9rKuQ9ka8Jd79Q=w2400",
        price: 135,
        author: "Edwin Diaz"
    },
    {
        title: "PHP with Laravel for beginners - Become a Master in Laravel",
        description: "Learn to master Laravel to make advanced applications like the real CMS app we build on this course",
        img: "https://lh3.googleusercontent.com/7HAcbRG8rqqyHYNWmeif2QBg7NJRbNniuUDVkhc69TVkwbXoqzU7VV_BLAqPe9NBZORdE1n_1Juo_JJFitZIIglp4ZA-b0hxxmh334idptvMntXS8aXuOIWf1i_nxi6tDgVBor5OhA=w2400",
        price: 150,
        author: "Edwin Diaz"
    },
    {
        title: "Build a Complete Registration and Login System using PHP MVC",
        description: "Add registration, login, remember me, account activation, password reset by email and more using the PHP MVC framework",
        img: "https://lh3.googleusercontent.com/rJD8Bvor4_Z1gYUnaXUq0qpPutZrGQ3TcqFrrOXm1-GFAtAtv749PBH85hb8J4YNJDVtsyZEKOEP9YAseMuJZXINyfoQHP6OWem5leamVYPoJffqV6iMzL7oTb2rsWWy7CI8_5-rGg=w2400",
        price: 80,
        author: "Dave Hollingworth"
    },
];

export default courses;