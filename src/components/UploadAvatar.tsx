import { UploadDropzone } from '@bytescale/upload-widget-react'
import { Dispatch, SetStateAction } from 'react'

const options = {
	apiKey: import.meta.env.VITE_BYTESCALE_API_KEY,
	maxFileCount: 1,
	showFinishButton: true,
	styles: {
		colors: {
			primary: '#222667',
		},
	},
	mimeTypes: ['image/jpeg'],
	multi: false,
}

type iProps = {
	setAvatar: Dispatch<SetStateAction<string>>
	toggleModal: Dispatch<SetStateAction<boolean>>
}

export default function UploadAvatar({ setAvatar, toggleModal }: iProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function handleCompleted(files: any): void {
		setAvatar(files[0].fileUrl)
		toggleModal(false)
	}

	return (
		<aside
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-25"
			role="modal"
		>
			<div className="min-w-fit w-4/5 max-w-xl p-5 h-fit bg-white rounded">
				<UploadDropzone
					onComplete={(files) => handleCompleted(files)}
					options={options}
				/>
			</div>
		</aside>
	)
}
