export async function onRequest(context) {
  const response = await context.next();
  const ct = response.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return response;

  return new HTMLRewriter()
    .on("head", {
      element(el) {
        el.append(
          '<script async src="https://www.googletagmanager.com/gtag/js?id=G-XD3M5907LX"></script>' +
          '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-XD3M5907LX");</script>',
          { html: true }
        );
      },
    })
    .transform(response);
}
