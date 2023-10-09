import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText, width, height } = media.data.attributes

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image
       loader={loader}
        unoptimized={true}
        src={url}
        width={width || "100%"}
        height={height || "100%"}
        alt={alternativeText || ""}
        {...props}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    );
  }

  // The image is responsive
  return (
    <Image
      loader={loader}
      width={width || "100%"}
      height={height || "100%"}
      src={url}
      alt={alternativeText || ""}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }} />
  );
}

Image.propTypes = {
  media: mediaPropTypes,
  className: PropTypes.string,
}

export default NextImage
