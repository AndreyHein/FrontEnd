async function example01() {
    // console.log("I am func example");
    return 0;
}

const example02 = async () => {

}
// example01().then(res => {console.log(res);})
// console.log('main code');

const gitHubFetch = async () => {
    const response = await fetch('https://api.github.com/users/facebook');
    const bodyData =  await response.json();
    console.log(bodyData);
    console.log(bodyData.avatar_url);
    return bodyData.avatar_url;
}

gitHubFetch().then((data) => {console.log(data + " wieder")});
console.log('main code');