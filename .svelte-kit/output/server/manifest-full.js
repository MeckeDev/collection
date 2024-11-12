export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "collection/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DQnowC7r.js","app":"_app/immutable/entry/app.DfSIhB7Z.js","imports":["_app/immutable/entry/start.DQnowC7r.js","_app/immutable/chunks/entry.CzD1ChuT.js","_app/immutable/chunks/runtime.D2L7Ghgo.js","_app/immutable/entry/app.DfSIhB7Z.js","_app/immutable/chunks/runtime.D2L7Ghgo.js","_app/immutable/chunks/render.Dh8lzoHM.js","_app/immutable/chunks/disclose-version.DCaeGpFS.js","_app/immutable/chunks/if.nn7AijiI.js","_app/immutable/chunks/store.QErX52-_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
