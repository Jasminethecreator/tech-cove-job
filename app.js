//Variables




const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input');

const jobResultTag = document.querySelector('#job-result-tag')

//filter sections
const jobCategory = document.querySelector('#job-category')




//Functions

async function searchJobs () {
    const API_URL="https://api.adzuna.com/v1/api/jobs/us/search/2?app_id=26e3f636&app_key=2af4ca62123cb424f88a3711c969c25a&results_per_page=10&what=Software%20Engineering&where=Massachusetts%20"

    const result = await fetch(API_URL)
    const data = await result.json()

    return data
}

//Event Listener
searchForm.addEventListener('submit', async function (event) {
    event.preventDefault()
//set variables here
        const jobTitle = searchInput.value
        const jobSearchResults = await searchJobs(jobTitle)
        const jobData = jobSearchResults.results


// this will appear in the html file/job search result output:
//start of original html

    jobResultTag.innerHTML =

`<h1 class="text-3xl">Results found for ${jobTitle} in Massachusetts</h1>`


    jobData.forEach(function (job) {
        const div = document.createElement('div')
        div.innerHTML =
            `<div class="flex flex-col justify-center text-xl  m-10 mb-2 p-3  text-sm border-4"> 
            <p class="mb-2"> <strong>Job title:</strong>  ${job.title}</p>
            <p class="mb-2"> <strong>Company:</strong> ${job.company.display_name}</p> 
            <p class="mb-2"> <strong>Loction:</strong> ${job.location.display_name}</p>
            <p class="mb-2"> <strong>Description:</strong> ${job.description}</p>
            <p class="mb-2"> <strong>Posted:</strong> ${job.created}</p>
            <p class="mb-2"> <a href="${job.redirect_url}">Apply to this postion</p>
            <p class ="p-2 mb-2 flex"> <a href="mailto:${job.id}@thetechcove.com?subject=Hi Jasmine, view this job posting! ${job.title}">
            <img src="icons/sent-mail.png" alt="Send email" width="30" height="30" ></a>
            <button class="focus:outline-none "> <svg id="save-button">height="30" viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z"/><path d="M0 0h48v48H0z" fill="none"/></svg></button>
            </p>
            </div>`

        jobResultTag.appendChild(div)
    })
})















