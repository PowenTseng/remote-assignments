const mockPosts = [
    {
      id: 1,
      title: "First Post",
      content: `1. Why Use Node.js? What Does It Do?
      Node.js是一個runtime environment可以讓JavaScript在瀏覽器以外的的地方運行，通常會是在server端運行，使用Node.js的原因與其功能如下：

      Non-blocking Asynchronous I/O: 可以同時處理複數個連線，相當適合用於建造可擴充的應用程式，特別是I/O-heavy的運算。
      Single Programming Language: JavaScript可以同時被使用在client-side和server-side，可以提生開發時的統一性。
      NPM: Node Package Manager (NPM) 提供相當多的套件，安裝上相當容易，也易於管理dependencies。
      Community and Ecosystem: 有龐大且活躍的社群為Node.js 開發新的函式庫和工具。
      
      2. Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS?
      
      Styled-components是一個用於給React components style的函式庫，他使用tagged template literals來為React compoents添加樣式。在React app中我創造三個Styled-Component，分別是Post、LikeButton和StyledThumbsUp，分別是Post的外框與flexbox設定、LikeButton按鈕顏色與flexbox設定與調整從React-icons/fa匯入的大拇指的大小與顏色。CSS-in-JS，跟一般的CSS不同的點在於，可以直接在JS檔中寫CSS，而不需要另外開一個CSS檔再匯入。CSS-in-JS提供以下優點：
      
      Scoped Styles: CSS-in-JS 提供component-scoped的樣式，可以避免global CSS 管理問題。
      Dynamic Styling: 可以根據props跟state動態的管理樣式。
      Less Context Switching: 在同一個檔案中寫CSS可以減少。
      Code Reusability: 可以創造可重複使用的styled components，可以在不同的專案中使用。
      
      3. useState and useEffect
      useState: 是一個React hook，可以讓function components擁有一個state，他會傳一個有兩個elements的array，前者為現在的狀態，後者為一個可以更新狀態的function。例如可以用useState來記錄按讚數量。
      const [count, setCount] = useState(0);
      useEffect: 被用來處理function components中的side effects，他接收兩個arguments，前者為function，後者為dependency array，會在每一次渲染後根據是否有dependency array以及其是否有更動來決定要不要執行前者的function。
        useEffect(() => {
          // Code to run on component mount or update
        }, [dependencies]);
      
      4. Client-Side Rendering vs. Server-Side Rendering
        Client-Side Rendering (CSR)是指HTML內容是在client-side才被渲染，也就是說是在使用者的瀏覽器而非在server渲染。
      優點：在網頁第一次加載完成後，可以提供較順暢的使用者體驗、可以提供更快的頁面間client-side navigation。
      缺點：網頁第一次加載時間較久、不SEO-friendly因為搜尋引上爬蟲程式在indexing時會看到空的頁面。
      
        Server-Side Rendering (SSR)是指HTML內容是在server端產生與渲染，完成渲染的頁面會直接從server送到client。
      優點：有更快的首次網頁加載速度、SEO-friendly因為網頁到client端時已經渲染完成。
      缺點：會造成server端的資源耗損、頁面間切換時，可能需要再跟發送請求給server重新加載頁面
      
        在Next.js中，SSR可以使用getServerSideProps這類的funcitons達成，他會在頁面渲染好之前跟server取得一些必要的資料，取得的資料會以prop的形式傳給page component，頁面會在server與取得的資料渲染好再一起送到client side。優點是可以在提供給client之前就夾在好必要的資料，使網頁有更好的SEO以及與CSR相比更快的load time。
      
      5. Which coding styles did you follow when coding?
      大致上遵循Airbnb style，但時間有點趕可能有些沒注意的地方，之後有時間會再留意。
      `,
      author: "Powen",
      likes: 5,
    },
    // ... more posts
  ];
  
  export default mockPosts;