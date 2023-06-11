

* {
    font-family: 'Poppins';
    background-size:cover;
   /* background-position:inherit; */
}

html {
    height: 100%;
}

body {
    margin: 0;
}

nav {
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
}

nav .left {
    font-size: 18px;
    margin-left: 10vw;
    margin-top: 1vh;

}

nav .right {
    font-size: 18px;
    margin-right: 10vw;
    margin-top: 1vh;
}

.link {
    text-decoration: none;
    font-size: 17px;
    padding: 5px 15px;
    border-radius: 5px;
    background: rgba(179, 236, 73, 0.89);
    color: #000;
}

.link:hover {
    background: #6a97dfd1;
}

#main {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
}


.search-container {
    flex-grow: 0.5;
    /* padding: 0 20px; */
    position: relative;
    display: flex;
    
  }


  
.search-container input {
    background: #ffffff;
    border: 1px solid #f02424;
    box-sizing: border-box;
    border-radius: 25px;
    height: 40px;
    width: 100%;
    font-size: 16px;
    padding-left: 31px;
    box-sizing: border-box;
    flex-grow: 1;
  }
  .search-container input:focus {
    outline: none;
  }
  .search-icon {
    height: 20px;
    position: absolute;
    top: 10px;
    left: 7px;
  }

.loader {
    border: 10px solid;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border-color: black transparent transparent;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    margin-top: 20px;
    display: none;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.search-result {
    display: flex;
    margin-top: 10px;
    border: 1px solid #e5e5e5;
    height: 170px;
    background-color: #fff;
}


.search-left img {
    height: 170px;
}

.search-right {
    padding-left: 20px;
    padding-top: 10px;
    position: relative;
}

.search-right a {
    text-decoration: none;
    color: #000;
}

.search-right a:hover {
    text-decoration: underline;
}

.name {
    font-size: 30px;
}

.full-name {
    font-size: 20px;
    height: 50px;
    overflow-y: scroll;
}

.address {
    color: gray;
    font-size: 17px;
}

.btn {
    margin-top: 20px;
    color: #fff;
    outline: none;
    border: none;
    padding: 6px;
    border-radius: 2px;
}

.btn:hover {
    cursor: pointer;
}

.add-to-fav {
    margin-top: 20px;
    background: #2196f3;
}

.remove-from-fav {
    margin-top: 20px;
    background: #f44336;
}

#toast {
    position: fixed;
    top: 65px;
    right: 15px;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    display: none;
}

.toast-error {
    background: #ff5a5a;
}

.toast-success {
    background: #8bc34a;
}

.super-hero-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 434px;
    padding: 20px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 30px;
    background: #fff;
}

.super-hero-detail img {
    height: 300px;
}

.super-hero-detail h1,
.super-hero-detail h3 {
    margin: 0;
}

.super-hero-detail .power-stats div {
    border: 1px solid black;
    padding: 5px 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 200px;
}

.no-results {
    background: #f44336;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    margin-top: 20px;
}