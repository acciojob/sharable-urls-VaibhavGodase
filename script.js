// your code here
document.getElementById('button').addEventListener('click',function () {
	  let name = document.getElementById("name").value;
            let year = document.getElementById("year").value;
            let baseUrl = "https://localhost:8080/";


	 
            if (name || year) {
                let params = new URLSearchParams();
                if (name) params.append("name", name);
                if (year) params.append("year", year);
                
                document.getElementById("url").textContent = baseUrl + "?" + params.toString();
            } else {
                document.getElementById("url").textContent = baseUrl;
            }
})