const url = `______________`;                                                                //masukkan URL api 

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data._______);                                              //lengkapi dengan bagian dari api yang sesuai
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; 

    _________ = articles.slice(0, __);                                        //mengatur banyaknya jumlah isi yang ingin ditampilkan 

    _________.forEach((article) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        //sesuaikan bagian rumpang dengan isi dari API
        newsItem.innerHTML = `
            <h2>${article.________}</h2>                                                                
            <p><strong>________:</strong> ${article._______ }</p>
            <p><strong>________:</strong> ${new Date(article._________).toLocaleString()}</p>
            <p>${article.________}</p>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Panggil fungsi untuk memuat berita saat halaman dimuat
fetchNews();
