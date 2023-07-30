# React SQL Editor
Task - Atlan Frontend Engineer <br/>
Live Link - https://atlan-sql-editor-task.netlify.app

## 1) The task

This project involves creating a dummy application with the following features:
<ul>
  <li>The application should include a space to accept SQL queries, which can be as simple as a textarea or as complex as a code-editor. However, this feature is not considered in the judging criteria.</li>
  <li>There is no need to implement a backend, query engine, or query validation for the application.</li>
  <li>Syntax validation for the SQL queries is not required.</li>
  <li>The data displayed in the application does not need to be the actual result of the queries that would be executed. It can be any arbitrary block of data chosen from a provided link or any other data source. The data and the query do not need to be synchronized.</li>
  <li>The actual SQL query and its result are not important. Placeholder data or mock results can be used as needed.</li>
  <li>The application must have more than one query along with its corresponding table of data. A predefined set of queries and tables with sample data should be available. The application should allow users to toggle between these queries and view the associated table data. This can be achieved through a dropdown or any other toggling mechanism.</li>
</ul>

<br/>
<br/>

![Landing page](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/cc96ce47-03ea-4b18-9eeb-b6e92344384a)
<br/>
<br/>
<br/>
![mobile view_16x9](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/dda0aa99-a442-4d01-88b0-5983f104058a)
<br/>
<br/>

## Added accessibility and functionality

<ul>
  <li>Implemented the capability to download the query results as both CSV and JSON files, providing users with options for data export.</li>
  <li>Enhanced user experience by displaying the time taken to fetch the data, allowing users to have better insights into query performance.</li>
  <li>Introduced a paginated table to optimize webpage loading, ensuring a smoother and faster browsing experience, especially with large datasets.</li>
  <li>Enriched the application with an advanced search functionality, enabling users to easily locate specific rows within the result query, promoting efficient data exploration and analysis.</li>
  <li>The application was optimized to ensure <b>responsiveness</b> across a wide range of devices, including small screen mobile phones, medium-sized screen tablets, and even large-screen tablets.</li>
</ul>
<br/>
<br/>

![Paginated table](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/6ef72f4b-4d76-4e96-8f8b-72062a4314c0)
<br/>
<br/>
## 2) The JavaScript framework I chose, along with any major plugins or packages I installed

I have opted for <b>React.js</b> as the JavaScript framework and incorporated <b>Tailwind CSS</b> for styling. <br/>
The Major Plugins and Packages used are : <br/>
<ul>
  <li>react-csv: 2.2.2</li>
  <li>react-hot-toast: 2.1.1</li>
  <li>react-table: 7.7.0</li>
  <li>autoprefixer: 10.4.14</li>
  <li>cssnano: 6.0.1</li>
  <li>postcss: 8.4.27</li>
  <li>tailwindcss: 2.2.19</li>
</ul>
<br/>


## 3) The page load time of your application, and how you measured this time.

For all the optimal analysis, I calculated the performance and load time along with how well it performs as per web standards using these two tools <br/>
<ol>
  <li>Lighthouse Chrome DevTools </li>
  <li>GT Metrix</li>
</ol>

The load time is about 0.8 sec

![Load Time](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/4aef2678-9cb6-483f-8d16-b98f68dbe99c)

<br/>
<br/>
For all the optimal analysis, I have used Google's Lighthouse tool to analysze the page load time, along with how well it performs as per web standards.

## Lighthouse Chrome DevTools

![Lighthouse ](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/0e762e4a-f848-4563-ae43-9ca50aee3919)

## GT Metrix

![GTMetrix Performance](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/df65c0f1-d082-4b93-852b-3f09c15f7598)

<br/>

## 4) Any optimisations I did to decrease the load time or increase performance.

In order to achieve lazy loading of components and improve the performance of the application's loading, I used <b>suspense</b> and <b>React.lazy()</b> in this work. In order to ensure a more seamless user experience, I also intentionally used <b>React.memo()</b> to optimise rendering whenever appropriate. Since I used Tailwind CSS for styling, I used <b>PurgeCSS</b> to get rid of unnecessary styles, resulting in a more effective and condensed final build with a smaller CSS file size.

## In my application, I successfully managed to render approximately 16,609 rows for the big data query while ensuring the browser remains intact and maintaining optimal performance.
![16000 rows](https://github.com/PrateekPheonix/Atlan-SQL-editor/assets/76847182/42aae21c-5cdf-4103-a935-8d9e6daa91d7)
