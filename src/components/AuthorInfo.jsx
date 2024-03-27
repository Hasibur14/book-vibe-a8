import PropTypes from 'prop-types';

const AuthorInfo = ({ author }) => {
console.log("single author info",author)

	const { bookName, authorName, authorAddress, authorContact, authorEmail } = author;


	return (
		<div>
			<section className="py-6 bg-base-200 rounded-xl border-2 ">
				<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-2">
					<div className="py-6 md:py-0 md:px-6">
						<h1 className="text-3xl font-bold">{bookName}</h1>
						<p className="pt-2 pb-4 text-2xl font-bold italic">By:  {authorName}</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
								</svg>
								<span>{authorAddress}</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>{authorContact}</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>{authorEmail}</span>
							</p>
						</div>
					</div>
					<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
						<label className="block">
							<span className="mb-1">Full name</span>
							<input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-none bg-white p-1" />
						</label>
						<label className="block">
							<span className="mb-1">Email address</span>
							<input type="email" placeholder="Your Gmail" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-white p-1" />
						</label>
						<label className="block">
							<span className="mb-1">Message</span>
							<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-white"></textarea>
						</label>
						<button type="button" className="self-center px-6 py-1 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 bg-green-400 text-white focus:ring-green-400 hover:ring-green-400 w-full">Submit</button>
					</form>
				</div>
			</section>

		</div>
	);
};


AuthorInfo.propTypes = {
	author: PropTypes.shape({
		bookName: PropTypes.string.isRequired,
		authorName: PropTypes.string.isRequired,
		authorAddress: PropTypes.string.isRequired,
		authorContact: PropTypes.string.isRequired,
		authorEmail: PropTypes.string.isRequired,
	}).isRequired,
};

export default AuthorInfo;