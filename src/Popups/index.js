import { getTargetUrl } from '../Helpers'

const gulliesActivePopup = feature => {
  //const varName = getTargetUrl()

  return `<div class="item"><p class="title">Location </p><p class="info">${feature.properties.street}</p></div><hr/>
  <input id="siteCode" name="siteCode" type="hidden" value="${feature.properties.site_code}">
  <input id="assetId" name="assetId" type="hidden" value="${feature.properties.central_asset_id}">
  <input id="easting" name="easting" type="hidden" value="${feature.properties.easting}">
  <input id="northing" name="northing" type="hidden" value="${feature.properties.northing}">
  <button class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4" data-module="govuk-button">
    Report this gully
  </button>`
}

const gulliesFaultPopup = feature => {
  const varName = getTargetUrl()

  return `<div>
  <div class="item"><p class="title">Location </p><p class="info">${feature.properties.street}</p></div>
    <div class="govuk-panel smbc-panel--error govuk-!-padding-1">
      <div class="smbc-panel__body smbc-!-font-color-white">
        A flood has already been reported here
      </div>
    </div><hr/>
    <a class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View this report</a>
    <a class="govuk-button govuk-!-margin-bottom-0 govuk-!-margin-top-4" href="https://www.stockport.gov.uk/">Go to the homepage</a>
    </div>`
}

const gulliesPopup = (feature, layer) => {
  var content = getcontent_gullies(feature)

  layer.bindPopup(content)
}

const getcontent_gullies = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return gulliesActivePopup(feature)
    case 2:
        return gulliesMaintenancePopup(feature)
    case 3:
        return gulliesFaultPopup(feature)    
  }
}

export {
  gulliesPopup
}