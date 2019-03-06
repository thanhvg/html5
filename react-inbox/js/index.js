var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* App */var
App = function (_React$Component) {_inherits(App, _React$Component);
	function App(args) {_classCallCheck(this, App);


		// Assign unique IDs to the emails
		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, args));var emails = _this.props.emails;
		var id = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
			for (var _iterator = emails[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var email = _step.value;
				email.id = id++;
			}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

		_this.state = {
			selectedEmailId: 0,
			currentSection: 'inbox',
			emails: emails };return _this;

	}_createClass(App, [{ key: 'openEmail', value: function openEmail(

		id) {
			var emails = this.state.emails;
			var index = emails.findIndex(function (x) {return x.id === id;});
			emails[index].read = 'true';
			this.setState({
				selectedEmailId: id,
				emails: emails });

		} }, { key: 'deleteMessage', value: function deleteMessage(

		id) {
			// Mark the message as 'deleted'
			var emails = this.state.emails;
			var index = emails.findIndex(function (x) {return x.id === id;});
			emails[index].tag = 'deleted';

			// Select the next message in the list
			var selectedEmailId = '';var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
				for (var _iterator2 = emails[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var email = _step2.value;
					if (email.tag === this.state.currentSection) {
						selectedEmailId = email.id;
						break;
					}
				}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}

			this.setState({
				emails: emails,
				selectedEmailId: selectedEmailId });

		} }, { key: 'setSidebarSection', value: function setSidebarSection(

		section) {
			var selectedEmailId = this.state.selectedEmailId;
			if (section !== this.state.currentSection) {
				selectedEmailId = '';
			}

			this.setState({
				currentSection: section,
				selectedEmailId: selectedEmailId });

		} }, { key: 'render', value: function render()

		{var _this2 = this;
			var currentEmail = this.state.emails.find(function (x) {return x.id === _this2.state.selectedEmailId;});
			return (
				React.createElement('div', null,
					React.createElement(Sidebar, {
						emails: this.props.emails,
						setSidebarSection: function setSidebarSection(section) {_this2.setSidebarSection(section);} }),
					React.createElement('div', { className: 'inbox-container' },
						React.createElement(EmailList, {
							emails: this.state.emails.filter(function (x) {return x.tag === _this2.state.currentSection;}),
							onEmailSelected: function onEmailSelected(id) {_this2.openEmail(id);},
							selectedEmailId: this.state.selectedEmailId,
							currentSection: this.state.currentSection }),
						React.createElement(EmailDetails, {
							email: currentEmail,
							onDelete: function onDelete(id) {_this2.deleteMessage(id);} }))));



		} }]);return App;}(React.Component);


/* Sidebar */
var Sidebar = function Sidebar(_ref) {var emails = _ref.emails,setSidebarSection = _ref.setSidebarSection;
	var unreadCount = emails.reduce(
	function (previous, msg) {
		if (msg.read !== "true") {
			return previous + 1;
		} else
		{
			return previous;
		}
	}.bind(undefined), 0);

	var deletedCount = emails.reduce(
	function (previous, msg) {
		if (msg.tag === "deleted") {
			return previous + 1;
		} else
		{
			return previous;
		}
	}.bind(undefined), 0);

	return (
		React.createElement('div', { id: 'sidebar' },
			React.createElement('div', { className: 'sidebar__compose' },
				React.createElement('a', { href: '#', className: 'btn compose' }, 'Compose ',
					React.createElement('span', { className: 'fa fa-pencil' }))),


			React.createElement('ul', { className: 'sidebar__inboxes' },
				React.createElement('li', { onClick: function onClick() {setSidebarSection('inbox');} }, React.createElement('a', null,
						React.createElement('span', { className: 'fa fa-inbox' }), ' Inbox',
						React.createElement('span', { className: 'item-count' }, unreadCount))),
				React.createElement('li', { onClick: function onClick() {setSidebarSection('sent');} }, React.createElement('a', null,
						React.createElement('span', { className: 'fa fa-paper-plane' }), ' Sent',
						React.createElement('span', { className: 'item-count' }, '0'))),
				React.createElement('li', { onClick: function onClick() {setSidebarSection('drafts');} }, React.createElement('a', null,
						React.createElement('span', { className: 'fa fa-pencil-square-o' }), ' Drafts',
						React.createElement('span', { className: 'item-count' }, '0'))),

				React.createElement('li', { onClick: function onClick() {setSidebarSection('deleted');} }, React.createElement('a', null,
						React.createElement('span', { className: 'fa fa-trash-o' }), ' Trash',
						React.createElement('span', { className: 'item-count' }, deletedCount))))));




};

/* Email classes */
var EmailListItem = function EmailListItem(_ref2) {var email = _ref2.email,onEmailClicked = _ref2.onEmailClicked,selected = _ref2.selected;
	var classes = "email-item";
	if (selected) {
		classes += " selected";
	}

	return (
		React.createElement('div', { onClick: function onClick() {onEmailClicked(email.id);}, className: classes },
			React.createElement('div', { className: 'email-item__unread-dot', 'data-read': email.read }),
			React.createElement('div', { className: 'email-item__subject truncate' }, email.subject),
			React.createElement('div', { className: 'email-item__details' },
				React.createElement('span', { className: 'email-item__from truncate' }, email.from),
				React.createElement('span', { className: 'email-item__time truncate' }, getPrettyDate(email.time)))));



};

var EmailDetails = function EmailDetails(_ref3) {var email = _ref3.email,onDelete = _ref3.onDelete;
	if (!email) {
		return (
			React.createElement('div', { className: 'email-content empty' }));

	}

	var date = getPrettyDate(email.time) + ' \xB7 ' + getPrettyTime(email.time);

	var getDeleteButton = function getDeleteButton() {
		if (email.tag !== 'deleted') {
			return React.createElement('span', { onClick: function onClick() {onDelete(email.id);}, className: 'delete-btn fa fa-trash-o' });
		}
		return undefined;
	};

	return (
		React.createElement('div', { className: 'email-content' },
			React.createElement('div', { className: 'email-content__header' },
				React.createElement('h3', { className: 'email-content__subject' }, email.subject),
				getDeleteButton(),
				React.createElement('div', { className: 'email-content__time' }, date),
				React.createElement('div', { className: 'email-content__from' }, email.from)),

			React.createElement('div', { className: 'email-content__message' }, email.message)));


};

/* EmailList contains a list of Email components */
var EmailList = function EmailList(_ref4) {var emails = _ref4.emails,onEmailSelected = _ref4.onEmailSelected,selectedEmailId = _ref4.selectedEmailId;
	if (emails.length === 0) {
		return (
			React.createElement('div', { className: 'email-list empty' }, 'Nothing to see here, great job!'));



	}

	return (
		React.createElement('div', { className: 'email-list' },

			emails.map(function (email) {
				return (
					React.createElement(EmailListItem, {
						onEmailClicked: function onEmailClicked(id) {onEmailSelected(id);},
						email: email,
						selected: selectedEmailId === email.id }));

			})));



};

// Render
$.ajax({ url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json',
	type: 'GET',
	success: function success(result) {
		React.render(React.createElement(App, { emails: result }), document.getElementById('inbox'));
	} });



// Helper methods
var getPrettyDate = function getPrettyDate(date) {
	date = date.split(' ')[0];
	var newDate = date.split('-');
	var month = months[0];
	return month + ' ' + newDate[2] + ', ' + newDate[0];
};

// Remove the seconds from the time
var getPrettyTime = function getPrettyTime(date) {
	var time = date.split(' ')[1].split(':');
	return time[0] + ':' + time[1];
};