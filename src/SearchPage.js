import React from "react";
import "./SearchPage.css";
import Button from '@material-ui/core/Button';
import SearchResult from "./SearchResult";

function SearchPage() {
	return (
		<div className="SearchPage">
			<div className="searchPage__info">
				<p>
					
					62 stays - 26 august to 30 august - 2
					guest
				</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined" color="secondary">
					Cancellation Flexibility
				</Button>
				<Button variant="outlined" color="secondary">
					Type oF place
				</Button>
				<Button variant="outlined" color="secondary">
					Price
				</Button>
				<Button variant="outlined" color="secondary">
					Rooms And beds
				</Button>
                <Button variant="outlined" color="secondary">
					More filters
				</Button>
			</div>
            <SearchResult
			
			img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
	location="Private location in center of london"
	title="stay at this spacious edwardian House"
	description="1 guest - 1bedrrom - 1.5 shared bathroom - wifi - kitchen - fire parking- washing Machine"
	star="4.75"
	price="$ 30/ night"
	total="$117/total"
	/>
	<SearchResult
			
			img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
	location="Private room in center of London"
	title="30 mins to Oxford Street, Excel London"
	description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
	star="4.1"
	price="$ 55/ night"
	total="$117/total"
	/>
	<SearchResult
			
			img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
	location="Private location in center of london"
	title="stay at this spacious edwardian House"
	description="1 guest - 1bedrrom - 1.5 shared bathroom - wifi - kitchen - fire parking- washing Machine"
	star="4.75"
	price="$ 30/ night"
	total="$117/total"
	/>
	<SearchResult
			
			img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
	location="Private location in center of london"
	title="stay at this spacious edwardian House"
	description="1 guest - 1bedrrom - 1.5 shared bathroom - wifi - kitchen - fire parking- washing Machine"
	star="4.75"
	price="$ 30/ night"
	total="$117/total"
	/>
	<SearchResult
			
			img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
	location="Private location in center of london"
	title="stay at this spacious edwardian House"
	description="1 guest - 1bedrrom - 1.5 shared bathroom - wifi - kitchen - fire parking- washing Machine"
	star="4.75"
	price="$ 30/ night"
	total="$117/total"
	/>



		</div>
	);
}

export default SearchPage;
