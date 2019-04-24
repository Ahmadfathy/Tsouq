module.exports = () => {
	const UploadFile = {
		filteredList: [],
		_init: function () {
			this._cacheDom();
			this._bindEvents();
		},
		_cacheDom: function () {
			this.$fileAvatar = $('.profile-avatar');
			this.$fileInputs = this.$fileAvatar.find('.profile-avatar-field input[type="file"]');
			this.$filePreview = this.$fileAvatar.find('.profile-avatar-preview img');
		},
		_bindEvents: function () {
			this.$fileInputs.each(function (index, input) {
				$(input).on('change', function (e) {
					var maxSize = $(e.target).attr('data-maxSize') || 1;
					this.filteredList = Array.from(e.target.files).filter((file) => {
						return file.size <= maxSize * 1024 * 1024;
					});
					UploadFile._render(e.target, this.filteredList);
				});
			});
		},
		_render: function (target, files) {
			var targetId = $(target).attr('id');
			var maxFiles = $(target).attr('data-maxFiles') || 1;


			for (var i = 0; i < files.length; i++) {
				console.log(this._fileImage(files[i]));
				this.$filePreview.attr('src', this._fileImage(files[i]))
				// this.$previewContainer.append(`
				// 	<div class="file-upload-preview animated fadeInUp">
				// 		<div class="file-upload-info">
				// 			${(this._fileImage(files[i]) ? `<img class="file-upload-img" src="${this._fileImage(files[i])}" alt="admin image"/>` : `<div class="file-upload-attatch"><i class="material-icons">attachment</i></div>`)}
				// 			<p class="file-upload-name">${files[i].name}</p>
				// 		</div>
				// 	</div>
				// `);
			}
			if ($(target).is('[multiple]')) {
				$(target).attr("data-maxFiles", Number($(target).attr('data-maxFiles')) - target.files.length);
			}
		},
		_fileImage: function (file) {
			if (file.type.match(/image.*/)) {
				return window.URL.createObjectURL(file);
			}
		},

	};


	UploadFile._init();
};