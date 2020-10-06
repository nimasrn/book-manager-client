export function SuccessMessage(res) {
  return res.additionalInfo || res.message || 'Successfully done';
}
